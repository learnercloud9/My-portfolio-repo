#!/bin/bash
echo "Deploying new build..."
chmod -R 755 /var/www/portfolio
sudo systemctl restart apache2
