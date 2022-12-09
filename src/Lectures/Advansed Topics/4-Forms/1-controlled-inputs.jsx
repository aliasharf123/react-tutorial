import React , {useState} from 'react';

function ControlInputs() {
    const [FirstName , setFirstname] = useState('')
    const [Error , setError] = useState('')
    const [email , setEmail] = useState('')
    const [people , setPeople] =useState([])
    const handleSubmit = (e) =>{
        e.preventDefault();
        const person = { id: new Date().getTime().toString() ,  FirstName , email }
        if(FirstName &&email){
            setPeople((people) =>{
                return [...people , person]
            })
            setFirstname('');
            setEmail('');
            setError('')
        }else{
            setError("Fill your Info")
        }
    }
    return ( 
    <>
        <article>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="FirstName">FirstName: </label>
                    <input 
                        type="text"
                        id='FirstName'
                        name='FirstName' 
                        value={FirstName}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="email">email: </label>
                    <input 
                        type="email" 
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type = "submit">Submit</button>
            </form>
            <h3 style={{
                color: "red" ,
                textAlign: "center"
            }}>{Error}</h3>
            {people.map((person) =>{
                const {id , FirstName , email} = person;
                return(
                    <div key={id} className="item">
                        <h4>{FirstName}</h4>
                        <p>{email}</p>
                    </div>
                );
            })}
        </article>
    </> 
    );
}

export default ControlInputs;