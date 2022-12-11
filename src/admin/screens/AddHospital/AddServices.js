import { doc, getDoc, updateDoc } from '@firebase/firestore';
import React , { useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';

import { db } from '../../../global/firebase/firebaseConfig';

function AddServices({text,type,id,services}) {
    const [modalShow, setModalShow] = useState(false);
    const [feedback,setFeedback] = useState({
        name:services ? services : ''
    })
    const SPESHALITES = [
        {
            name:'name',
            value:feedback.name,
            type:'text',
            text:'Enter Your Hospital Service'
        }
    ]
    let name, value;
    const inputHandler = (e)=>{
        name = e.target.name;
        value= e.target.value;
        setFeedback({...feedback, [name]:value});
    }

    const sendFeedback = async(e)=>{
        e.preventDefault();
        const updateHospital = doc(db, "Hospital", id);
        try{
                const docSnap = await getDoc(updateHospital);
                if (docSnap.exists()) {
                    const data = docSnap.data().services
                    try {
                        await updateDoc(updateHospital, {
                            services:[
                                    ...data,
                                    feedback.name
                            ]
                          });
                          alert('Your Hospital Service Added Successfuly')   
                          setFeedback({
                              name:''
                          })   
                    }catch(e){
                         console.log(e.message)
                    }
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }catch(e){
            console.log(e.message)
        }
        setModalShow(false);
    }
     
    return (
        <>
        <Button style={{ backgroundColor: '#008aff',
        fontFamily: `Poppins, sans-serif`,
        fontWeight:'500'}} onClick={() => setModalShow(true)}>{text}</Button>
        <Modal
            show={modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={() => setModalShow(false)}>
                <Modal.Title id="contained-modal-title-vcenter" style={{color:'#008aff', fontWeight:700}}>
                    {type}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="account_form_body mt-2">
                    {SPESHALITES.map(item =>(
                        <Row key={item.text}>
                            <Col xl={12}>
                                { 
                                        <FloatingLabel className="mb-3" controlId="floatingTextarea2" label={item.text}>
                                            <Form.Control
                                            name={item.name}
                                            type={item.type}
                                            value={item.value}
                                            onChange={inputHandler}
                                            placeholder="Leave a comment here"
                                            />
                                        </FloatingLabel>
                                }
                            </Col>
                        </Row>
                        ))
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer style={{justifyContent: 'center'}}>
                <Button style={{ backgroundColor: '#008aff',
                fontFamily: `Poppins, sans-serif`,
                fontWeight:'500'}} onClick={sendFeedback}>{type}</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default AddServices