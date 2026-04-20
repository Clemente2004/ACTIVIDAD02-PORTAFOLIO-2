from flask import Flask,request,render_template,url_for,redirect
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/inicio")
def inicio():
    return render_template("index.html")

@app.route("/habilidades")
def habilidades():
    return render_template("stack.html")

@app.route("/proyectos")
def proyectos():
    return render_template("proyectos.html")

@app.route("/sobre-mi")
def trayectoria():
    return render_template("trayectoria.html")

@app.route("/contacto")
def contacto():
    return render_template("contacto.html")


if __name__ == "__main__":
    app.run(debug=True)