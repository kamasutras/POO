#print("Hola mundo")
#print("Mi nombre es:")

# Con '#' se utiliza para comentar 
nombre = "robot"
apellido = "(entrevistador)"
edad = 19

print(f'Hola mi nombre es: {nombre} {apellido} y tengo {edad} anos de edad. ')



nombreUsuario = str(input("Un gusto en conocerte, como te llamas? -> "))
edadUsuario = int(input("Cual es tu edad? -> "))
print(f'Bienvenido:{nombreUsuario}\nTu edad es: {edadUsuario} anos de edad\nFelicidades cumples con los requisitos!!')

if edadUsuario >  edad:
    print("Soy mayor que tu jajajaja..")
elif edadUsuario < edad:
    print("oohh que  lamentable, eres mayor que yo...")
else: 
    print("Mira que coincidencia, tenemos la misma edad! :D")
