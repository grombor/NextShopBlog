const ProductHeader = ({ header }) => {
  return (
    <div className="mx-5">
        <h2 className='title is-size-3 is-uppercase mb-2 is-size-4-mobile' style={{lineHeight: "1em"}}>
        { header }
        </h2>
        <h3 className='title is-size-6 is-uppercase has-text-weight-light is-size-6-mobile'>
        SZAFY UBRANIOWE SUM 300 (szer. kolumny 300 mm)
        </h3>
    </div>
  )
}

export default ProductHeader