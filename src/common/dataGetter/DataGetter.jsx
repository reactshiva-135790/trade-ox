import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { modalPost } from "../../https/api/Api"
//import { useToken } from "../../hooks/useToken";

const DataGetter = (props) => {
    const [myData, setMyData] = useState(null);
    const [isError, setIsError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(true);
    const [buttonClicked, setButtonClicked] = useState(false); // New state variable

    const getMyPostData = async () => {
        try {
            setIsLoading(true);
            const res = await axios.get(`https://fufiscan.com/api?module=token&action=getToken&contractaddress=${props.search}`);
            console.log("New:", res.data.result);
            setMyData(res.data.result);
            setIsLoading(false);
        } catch (error) {
            setIsError(error.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getMyPostData();
    }, [props.search]);


    const handleClick = async () => {
        try {
            const data = {
                contractaddress: props.search,
                name: myData.name,
                symbol: myData.symbol
            };

            const response = await axios.post(modalPost, data);
            console.log("Response:", response.data);
            setModalVisible(false); // Close the modal after successful click
            setButtonClicked(true); // Set buttonClicked to true after the button is clicked
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
                <Modal.Body>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : myData ? (
                        <div className="d-flex justify-content-between">
                            <div>
                                <span className="ihXAEA">{myData.name}</span>
                                <span className="bybWNd">{myData.symbol}</span>
                            </div>

                            <div>
                                <Button variant="warning" onClick={handleClick}>Add</Button>
                            </div>
                        </div>
                    ) : (
                        <p>No data available</p>
                    )}

                </Modal.Body>
            </Modal>
            {buttonClicked && (
                <div className="alert alert-success" role="alert">
                    Token Added successfully!
                </div>
            )}
        </>
    );
};

export default DataGetter;
