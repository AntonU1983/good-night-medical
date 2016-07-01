Add-Type -A System.IO.Compression.FileSystem
Remove-Item *.zip
[IO.Compression.ZipFile]::CreateFromDirectory('front-end', 'frontend.zip')
