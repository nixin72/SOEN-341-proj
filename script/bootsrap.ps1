Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

choco install git -params '"/GitAndUnixToolsOnPath"'
choco install nodejs npm

npm install
