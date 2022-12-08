import React from 'react'

const Lightbox = (props) => {
  return (
    <section className={`app__product-images-lightbox ${props.show ? "lightShow" : "lightHide"}`}>
        Lightbox
    </section>
  )
}

export default Lightbox