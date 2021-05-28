import React,{Fragment,useState} from 'react';
import {Table,Button,Modal,InputGroup,FormControl} from 'react-bootstrap';
import './Table.css'
const TableOutput = ({ todos,deleteHandler,editHandler }) => {
    const [Index,setIndex]=useState();
    const [flag,setFlag]=useState(false);
    const [Input,SetInput]=useState('');
    const activateModal=(i)=>{
        setFlag(true);
        setIndex(i);

    }
    const hideModal=()=>{
        setFlag(false);
        SetInput('')
        setIndex();
    }
    const handleSave=()=>{
        setFlag(false);
        SetInput('');
        if(Input.length!==0){
            editHandler(Index,Input);
        }
    }

    return ( 
        <Fragment>
            {/* {console.log(Index)} */}
            <Modal show={flag} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>
                        EDIT
                    </Modal.Title>
                
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="p-4"> 
                        <FormControl placeholder="UPDATED TASK" 
                            value={Input}
                            onChange={e=>SetInput(e.target.value)}
                            className="block"
                        > 
                        </FormControl>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hideModal}>CLOSE</Button>
                    <Button variant="success" onClick={handleSave}>SAVE</Button>
                </Modal.Footer>
            </Modal>
            <Table striped bordered hover variant="dark" responsive="lg" className="mt-2">
                <thead>
                    <tr>
                        <th colSpan="8">TODO</th>
                        <th colSpan="2">EDIT</th>
                        <th colSpan="2">DELETE</th>
                    </tr>
                </thead>
                {/* {console.log(todos)} */}
                    {
                        todos.map(
                            (todo)=>(
                                <thead key={todo.ID}>
                                    <tr>
                                        <td colSpan="8">{todo.des}</td>
                                        <td colSpan="2"> 
                                            <Button onClick={()=>activateModal(todo.ID)}>
                                                EDIT
                                            </Button>
                                        </td>
                                        <td colSpan="2">
                                            <Button variant="danger" onClick={()=>deleteHandler(todo.ID)}>
                                                DELETE
                                            </Button>
                                        </td>
                                    </tr>
                                </thead>
                            )
                        )
                    }
            </Table>
        </Fragment>
    );
}
 
export default TableOutput;
