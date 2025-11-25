# 🚀 Scripts Úteis para o Projeto
# Execute estes comandos no PowerShell

# ════════════════════════════════════════════════════════════
# 📦 SETUP INICIAL (Execute apenas uma vez)
# ════════════════════════════════════════════════════════════

# Verificar se Node.js está instalado
function Test-NodeInstalled {
    try {
        $nodeVersion = node --version
        $npmVersion = npm --version
        Write-Host "✅ Node.js instalado: $nodeVersion" -ForegroundColor Green
        Write-Host "✅ npm instalado: $npmVersion" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Host "❌ Node.js não encontrado!" -ForegroundColor Red
        Write-Host "   Instale em: https://nodejs.org/" -ForegroundColor Yellow
        return $false
    }
}

# Instalar dependências
function Install-Dependencies {
    Write-Host "`n📦 Instalando dependências..." -ForegroundColor Cyan
    npm install
    Write-Host "✅ Dependências instaladas!" -ForegroundColor Green
}


# ════════════════════════════════════════════════════════════
# ⚙️ COMANDOS DE DESENVOLVIMENTO
# ════════════════════════════════════════════════════════════

# Iniciar servidor de desenvolvimento
function Start-DevServer {
    Write-Host "`n🚀 Iniciando servidor de desenvolvimento..." -ForegroundColor Cyan
    Write-Host "   Acesse: http://localhost:5173" -ForegroundColor Yellow
    npm run dev
}

# Build para produção
function Build-Production {
    Write-Host "`n🔨 Gerando build de produção..." -ForegroundColor Cyan
    npm run build
    Write-Host "✅ Build gerado na pasta: dist/" -ForegroundColor Green
}

# Preview do build
function Preview-Build {
    Write-Host "`n👀 Visualizando build de produção..." -ForegroundColor Cyan
    npm run preview
}


# ════════════════════════════════════════════════════════════
# 🔍 VERIFICAÇÕES
# ════════════════════════════════════════════════════════════

# Verificar se a foto está no lugar certo
function Test-Photo {
    $photoPath = "public/foto.jpg"
    if (Test-Path $photoPath) {
        Write-Host "✅ Foto encontrada em: $photoPath" -ForegroundColor Green
        
        # Verificar se o App.jsx está configurado
        $appContent = Get-Content "src/App.jsx" -Raw
        if ($appContent -match '/foto\.jpg') {
            Write-Host "✅ App.jsx configurado corretamente" -ForegroundColor Green
        }
        else {
            Write-Host "⚠️  Atualize o caminho em src/App.jsx (linha 68)" -ForegroundColor Yellow
            Write-Host "   Mude para: photoSrc='/foto.jpg'" -ForegroundColor Yellow
        }
    }
    else {
        Write-Host "❌ Foto não encontrada!" -ForegroundColor Red
        Write-Host "   Coloque sua foto em: $photoPath" -ForegroundColor Yellow
    }
}

# Verificar estrutura do projeto
function Test-ProjectStructure {
    Write-Host "`n🔍 Verificando estrutura do projeto..." -ForegroundColor Cyan
    
    $requiredFiles = @(
        "package.json",
        "vite.config.js",
        "tailwind.config.js",
        "src/App.jsx",
        "src/main.jsx",
        "src/components/Header.jsx",
        "src/components/ProfileCard.jsx",
        "src/contexts/ThemeContext.jsx"
    )
    
    $allOk = $true
    foreach ($file in $requiredFiles) {
        if (Test-Path $file) {
            Write-Host "  ✓ $file" -ForegroundColor Gray
        }
        else {
            Write-Host "  ✗ $file (faltando)" -ForegroundColor Red
            $allOk = $false
        }
    }
    
    if ($allOk) {
        Write-Host "`n✅ Todos os arquivos essenciais estão presentes!" -ForegroundColor Green
    }
    else {
        Write-Host "`n⚠️  Alguns arquivos estão faltando" -ForegroundColor Yellow
    }
}


# ════════════════════════════════════════════════════════════
# 🌐 GIT & DEPLOY
# ════════════════════════════════════════════════════════════

# Inicializar Git
function Initialize-Git {
    Write-Host "`n📝 Inicializando Git..." -ForegroundColor Cyan
    git init
    git add .
    git commit -m "Initial commit - Currículo profissional"
    git branch -M main
    Write-Host "✅ Git inicializado!" -ForegroundColor Green
    Write-Host "`n⚠️  Configure o remote:" -ForegroundColor Yellow
    Write-Host "   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git" -ForegroundColor Gray
    Write-Host "   git push -u origin main" -ForegroundColor Gray
}

# Status do Git
function Show-GitStatus {
    Write-Host "`n📊 Status do Git:" -ForegroundColor Cyan
    git status
}


# ════════════════════════════════════════════════════════════
# 🎯 ATALHOS RÁPIDOS
# ════════════════════════════════════════════════════════════

# Setup completo
function Setup-Project {
    Write-Host "════════════════════════════════════════════" -ForegroundColor Magenta
    Write-Host "  🚀 SETUP DO PROJETO - CURRÍCULO" -ForegroundColor Magenta
    Write-Host "════════════════════════════════════════════" -ForegroundColor Magenta
    
    if (Test-NodeInstalled) {
        Install-Dependencies
        Test-ProjectStructure
        Test-Photo
        
        Write-Host "`n════════════════════════════════════════════" -ForegroundColor Green
        Write-Host "  ✅ SETUP CONCLUÍDO!" -ForegroundColor Green
        Write-Host "════════════════════════════════════════════" -ForegroundColor Green
        Write-Host "`n💡 Próximo passo: npm run dev" -ForegroundColor Yellow
    }
}

# Verificação completa
function Test-Everything {
    Write-Host "════════════════════════════════════════════" -ForegroundColor Cyan
    Write-Host "  🔍 VERIFICAÇÃO COMPLETA" -ForegroundColor Cyan
    Write-Host "════════════════════════════════════════════" -ForegroundColor Cyan
    
    Test-NodeInstalled
    Test-ProjectStructure
    Test-Photo
    
    Write-Host "`n════════════════════════════════════════════" -ForegroundColor Cyan
}


# ════════════════════════════════════════════════════════════
# 📖 HELP / AJUDA
# ════════════════════════════════════════════════════════════

function Show-Help {
    Write-Host "`n════════════════════════════════════════════" -ForegroundColor Magenta
    Write-Host "  📖 COMANDOS DISPONÍVEIS" -ForegroundColor Magenta
    Write-Host "════════════════════════════════════════════" -ForegroundColor Magenta
    
    Write-Host "`n🚀 SETUP E DESENVOLVIMENTO:" -ForegroundColor Cyan
    Write-Host "  Setup-Project         - Setup completo inicial"
    Write-Host "  Install-Dependencies  - Instalar dependências"
    Write-Host "  Start-DevServer       - Iniciar servidor (npm run dev)"
    Write-Host "  Build-Production      - Gerar build (npm run build)"
    Write-Host "  Preview-Build         - Preview do build"
    
    Write-Host "`n🔍 VERIFICAÇÕES:" -ForegroundColor Cyan
    Write-Host "  Test-NodeInstalled    - Verificar Node.js/npm"
    Write-Host "  Test-Photo            - Verificar foto"
    Write-Host "  Test-ProjectStructure - Verificar arquivos"
    Write-Host "  Test-Everything       - Verificação completa"
    
    Write-Host "`n🌐 GIT & DEPLOY:" -ForegroundColor Cyan
    Write-Host "  Initialize-Git        - Inicializar Git"
    Write-Host "  Show-GitStatus        - Status do Git"
    
    Write-Host "`n═══════════════════════════════════════════" -ForegroundColor Magenta
    Write-Host "  💡 Para mais ajuda, leia: COMECAR.md" -ForegroundColor Yellow
    Write-Host "═══════════════════════════════════════════" -ForegroundColor Magenta
}


# ════════════════════════════════════════════════════════════
# 🎉 MENSAGEM DE BOAS-VINDAS
# ════════════════════════════════════════════════════════════

Write-Host "`n════════════════════════════════════════════" -ForegroundColor Magenta
Write-Host "  🎨 CURRÍCULO PROFISSIONAL - SCRIPTS" -ForegroundColor Magenta
Write-Host "════════════════════════════════════════════" -ForegroundColor Magenta
Write-Host "`nArquivo carregado! Digite Show-Help para ver os comandos." -ForegroundColor Yellow
Write-Host "`n💡 Atalho rápido:" -ForegroundColor Cyan
Write-Host "   Setup-Project  → Setup completo" -ForegroundColor Gray
Write-Host "   npm run dev    → Iniciar servidor`n" -ForegroundColor Gray


# Exportar funções para uso
Export-ModuleMember -Function *
