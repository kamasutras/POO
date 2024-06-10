from flask import Flask, request, make_response, redirect 
app = Flask(__name__)

@app.route('/index')
def index():
    user_ip_information = request.remote_addr
    response = make_response(redirect("/show_information_address"))
    response.set_cookie("user_ip_information", user_ip_information)
    return response

@app.route("/show_information_address")
def show_information():
    user_ip = request.cookies.get("user_ip_address")
    return f"Hola, tu direccion ip es {user_ip}"
    #return f"Hola como estas, tu direccion IP es {myIp}"
    # return 'Hello, World!'  
app.run(host='0.0.0.0', port='8080', debug=True)
