server {
    server_name  www.qatrackplus.com;
    rewrite ^(.*) http://qatrackplus.com$1 permanent;
}

server {
 
    listen   80;
    server_name qatrackplus.com;
 
    access_log /var/log/nginx/qatrackplus.com.access.log;
    error_log /var/log/nginx/qatrackplus.com.error.log;

    location ~* /(css|fonts|img|js)/(.*) {
         #autoindex on;  
         access_log off;    
         alias /home/randlet/projects/qatrackplus.com/deploy/$1/$2;
    }

    location / {
        #autoindex on;
        expires 30d;
        try_files $uri  $uri.html $uri/ /index.html;
	root /home/randlet/projects/qatrackplus.com/deploy/;
        index index.html;
    }

}

