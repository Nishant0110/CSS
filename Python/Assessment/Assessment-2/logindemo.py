from tkinter import *
from tkinter import ttk
import mysql.connector
from mysql.connector import Error

#Define the on_select function combobox
#def on_select(event):
#selected_city = combo_box.get()
#print(f"Selected city: {selected_city}")

root = Tk()
root.geometry("750x500")
root.title("Registration Form")

l_id = Label(root, text="ID")
l_id.place(x=50, y=50)
l_fname = Label(root, text="Fname")
l_fname.place(x=50, y=100)
l_lname = Label(root, text="Lname")
l_lname.place(x=50, y=150)
l_email = Label(root, text="Email")
l_email.place(x=50, y=200)
l_mobile = Label(root, text="Mobile")
l_mobile.place(x=50, y=250)
l_gender = Label(root, text="Gender")
l_gender.place(x=50, y=300)

v = IntVar()
Radiobutton(root, text='Male', variable=v, value=1).place(x=150, y=300)
Radiobutton(root, text='Female', variable=v, value=2).place(x=200, y=300)

# Correct the Label and Combobox usage
l_city= Label(root, text="City Name: ")
l_city.place(x=50, y=350)

combo_box = ttk.Combobox(root, values=["Ahmedabad", "Mumbai", "Rajkot"])
combo_box.place(x=150, y=350)

# Bind event to selection
#combo_box.bind("<<ComboboxSelected>>", on_select)

btn_sub = Button(root, text="Submit")
btn_sub.place(x=50, y=400)

root.mainloop()
