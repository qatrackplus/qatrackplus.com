from fabric.api import run, env, cd, local


env.hosts = ['randlet.com']

def deploy():
    local("rm -rf build && mkdir build")
    local("cp -r img css fonts js index.html build")
    local("git commit -am 'update build'")
    local("git push origin master")
    #venv = "source ~/venvs/randlet.com/bin/activate && "
    #with cd("~/projects/randlet.com"):
    #    run("git pull origin master")
    #    run(venv + "python sitebuilder.py build")




