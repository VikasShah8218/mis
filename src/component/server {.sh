server {
        listen 80;
        listen [::]:80;

        root /var/www/shah_market_frontend;
        #index index.html index.htm index.nginx-debian.html;

        server_name mis-brilliant.techkingdom.in;

        location / {
                index index.html
                try_files $uri $uri/ =404;

        }
}

/home/ubuntu/projects/mis_project/mis
sudo ln -s /etc/nginx/sites-available/mis_build /etc/nginx/sites-enabled/

/var/www/mis/build
sudo vim /etc/nginx/sites-available/mis_build