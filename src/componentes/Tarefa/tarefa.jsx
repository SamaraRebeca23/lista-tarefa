import "./tarefa.css";
function tarefa(props){

    return(
        <figure className="tarefa">
            <text src={props.text}/>; 

        </figure>
    )
}

export default tarefa; 
