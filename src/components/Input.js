import React,{Fragment,useState} from 'react';
import {InputGroup,FormControl,Button} from 'react-bootstrap';
import axios from 'axios';
import './Input.css'
const Input = (props) => {

    const [Input,SetInput]=useState('');
    const sendData=()=>{
        if(Input.length!==0){
            props.todoHandler(Input);
            SetInput('');
        }
    }
    return ( 
        <Fragment>
            <InputGroup className="p-2 block">
                <FormControl placeholder="TASK TODO" 
                value={Input}
                onChange={e=>SetInput(e.target.value)}> 
                    
                </FormControl>
                <InputGroup.Append>
                    <Button onClick={sendData}> 
                        INSERT
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        {/* {console.log("INPUT",Input)} */}
        </Fragment>
    );
}
 
export default Input;
