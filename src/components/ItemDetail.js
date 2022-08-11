import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const ItemDetail = ({ listProduct }) => {
    return (
        <>
            
            {['right'].map((placement) => (
                <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                            <Popover.Header as="h3">{`Descripción`}</Popover.Header>
                            <Popover.Body>
                                Aqui iria la una descripcion distinta conectada con cada producto
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <Button variant="secondary">Detalles del producto</Button>
                </OverlayTrigger>
            ))}
        </>
    )
}

export {ItemDetail}