import HeaderAlt from "../HeaderAlternativo/HeaderAlt"
import './Form.css'
import { FormEvent, useState } from "react"
const Preinscripcion = () => {
    const [scroll, setScroll] = useState(false)
    if(!scroll){
        console.log(scroll)
        window.scrollTo(0, 0)
        setScroll(true)
    }
    const [name, setName] = useState('')
    const [doc, setDoc] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [email, setEmail] = useState('')
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('doc', doc);
        formData.append('mensaje', mensaje);
        const fileInput = document.querySelector('input[type="file"]');

        if (fileInput && fileInput instanceof HTMLInputElement) {
            const selectedFile = fileInput.files?.[0]; // Utilizando el operador de encadenamiento opcional
            if (selectedFile) {
                formData.append('pdf', selectedFile);
                console.log(formData.get('pdf'));
            } else {
                console.error('No se seleccionó ningún archivo');
            }
        } else {
            console.error('Input de archivo no encontrado');
        }

        try {
            const response = await fetch('https://backprueba-kakfzoh77-santixdesigner.vercel.app/form', {
                method: 'POST',
                body: formData,  // No necesitas JSON.stringify() aquí
            });

            if (response.ok) {
                console.log('Formulario enviado con éxito');
            } else {
                console.error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };
    return (
        <>
            <HeaderAlt assets="../assets/contrato.jpg" textH2="INSCRIPCIÓN" />
            <img src="../assets/image-form-1.png" alt="" className="imagen-form-1 imagen-form" />
            <img src="../assets/image-form-2.png" alt="" className="imagen-form-2 imagen-form" />
            <main>
                <div className="container-2">
                    <p>Por favor, rellene los siguientes datos: </p>
                    <form>
                        <p>Apellido y Nombre del Alumno</p>
                        <input type="text" name="name" id="" placeholder="" onChange={(e) => setName(e.target.value)} />
                        <p>Email</p>
                        <input type="email" name="email" placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        <p>Documento</p>
                        <input type="text" onChange={(e) => setDoc(e.target.value)} />
                        <p>Mensaje</p>
                        <textarea name="message" placeholder="" onChange={(e) => setMensaje(e.target.value)} />
                        <p>Documento, parte de adelante y atrás (en pdf o documento)</p>
                        <input type="file" name="pdf" />
                        <div>
                            <button onClick={handleSubmit} style={{ display: "flex", justifyContent: "center" }}>Enviar!</button>
                        </div>
                        <p>Recordatorio: <span className="negrita">La preinscripción</span> no solo <span className="negrita">no asegura
                            una vacante</span>, si no que <span className="negrita">quedará en lista de espera.</span> Por eso
                            mismo, <span className="negrita">le recomendamos asistir presencialmente con el personal de
                                Secretaría</span></p>
                        <input type="hidden" name="_captcha" value="false" />
                    </form>
                </div>
            </main>
        </>
    )
}

export default Preinscripcion