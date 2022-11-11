import React from "react"
import { StyledRegisterVideo } from "./styles"
//custom hook
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);
   
    return { 
        values,
        handleChange: (evento) => {
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: {titulo:"" ,url:""}
    });
    const [formVisivel, setFormVisivel] = React.useState(false);

    // botão de adicionar +
    //modal (tela escura atrás da janela)
    //formulario
    return (
        <StyledRegisterVideo>
            <button type="button" className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {/* Ternário */}
            {/* Operadores de curto-circuito */}
            {formVisivel && (
                <form onSubmit={(evento) =>{
                    evento.preventDefault();
                    console.log(formCadastro.values);
                    setFormVisivel(false);
                    formCadastro.clearForm();
                } } >
                    <div>
                        <button className="close-modal" onClick={() => setFormVisivel(true)}>
                            X
                        </button>
                        <input 
                        placeholder="Video Title" 
                        name="titulo"
                        value={formCadastro.values.titulo} 
                        onChange={formCadastro.handleChange}
                         />

                        <input placeholder="URL"
                        name="url"
                         value={formCadastro.values.url} 
                         onChange={formCadastro.handleChange}
 
                         />
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            )}
        </StyledRegisterVideo>
    )


}