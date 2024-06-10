
nombre = input("Ingrese el nombre completo del empleado: ")
valorHora = float(input("Ingrese el valor por hora: "))
horasTrabajadas = int(input("Ingrese la cantidad de horas trabajadas en el mes: "))
horasMensuales = 160
maxHorasExtras = 40
    
if horasTrabajadas > horasMensuales:
        horasExtras = min(horasTrabajadas - horasMensuales, maxHorasExtras)
        horasExtrasNoPagadas = max(0, horasTrabajadas - horasMensuales - maxHorasExtras)
else:
    horasExtras = 0
    horasExtrasNoPagadas = 0
    
sueldoBase = min(horasTrabajadas, horasMensuales) * valorHora
sueldoExtras = horasExtras * valorHora * 2
sueldoTotal = sueldoBase + sueldoExtras
    
    
print(f"\nEmpleado: {nombre}")
print(f"Sueldo base: ${sueldoBase}")
print(f"Pago por horas extras: ${sueldoExtras}")
print(f"Horas extras no pagadas: {horasExtrasNoPagadas} horas")
print(f"Sueldo total a pagar: ${sueldoTotal}")

