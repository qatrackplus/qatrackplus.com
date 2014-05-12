from fabric.api import run, env, cd, local


env.hosts = ['randlet.com']

def deploy():
    local("git push origin master")
    with cd("~/projects/qatrackplus.com"):
        run("git pull origin master")
        run("rm -rf deploy && mkdir deploy")
        run("cp -r qatrackplus.com/{img,css,fonts,js,index.html,sitemap.xml} deploy")




