import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap';

import Addcymbal from './Addcymbal/index'
import AddCymbalPack from './AddCymbalPack/index'

export default function Cymbals() {
  useEffect(() => {
    document.title = `Cymbals - IMS - Wavemg`;
  })


  return (
    <div className="container-fluid">
      <Row>
        <Addcymbal />
        <AddCymbalPack />
      </Row>
    </div>
  )
}
