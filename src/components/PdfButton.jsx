import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { motion, AnimatePresence } from 'framer-motion';

const PdfButton = ({ contentRef }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: 'Curriculo_Iago_Koenig',
    onBeforeGetContent: () => {
      setIsGenerating(true);
      return Promise.resolve();
    },
    onAfterPrint: () => {
      setIsGenerating(false);
    },
  });

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePrint}
        disabled={isGenerating}
        aria-label="Gerar e baixar currículo em PDF"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 dark:bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-700 dark:hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-5 h-5 ${isGenerating ? 'animate-bounce' : ''}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
        {isGenerating ? 'Gerando PDF...' : 'Baixar PDF'}
      </motion.button>

      <AnimatePresence>
        {isGenerating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 no-print"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-2xl"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent"></div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Gerando seu PDF...
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Aguarde um momento
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PdfButton;
