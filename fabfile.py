from fabric.api import cd, env, local, run

env.hosts = ['randlet.com']

def deploy():
    local("git push origin master")
    with cd("~/projects/qatrackplus.com"):
        run("git pull origin master")
        run("rm -rf deploy && mkdir deploy")
        run("cp -r qatrackplus.com/{img,css,fonts,js,index.html,news.html,publications.html,sitemap.xml} deploy")

