@echo off
echo ========================================
echo XTL1016 Vercel 部署脚本
echo ========================================
echo.

echo 检查 Vercel CLI 是否已安装...
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误: Vercel CLI 未安装
    echo 请先运行: npm install -g vercel
    pause
    exit /b 1
)

echo Vercel CLI 已安装
echo.

echo 开始部署到 Vercel...
echo.

vercel --prod

echo.
echo 部署完成！
echo 请查看上面的输出获取部署 URL
echo.
pause
