import React from 'react'
import {Link} from 'react-router-dom'


import ProductInput from '../forms/ProductInput.jsx'
import ImageUpload from '../forms/ImageUpload'
import ProductDescription from '../forms/ProductDescription'
import ValueInput from '../forms/ValueInput'
import styles from './CreateProductForm.module.css'
import SubmitBtn2 from '../forms/SubmitBtn2'

function CreateProductForm({ btnText }) {
  return(
    <div>
            <form>
            <div className={styles.cpcontainer}>
              <ProductInput type="text" name='collectionname' placeholder="Enter Collection's name" text="Collection's name:" />
              <ProductInput type="text" name='productname' placeholder="Enter product's name" text="Product's name:" />
            </div>
            <ProductDescription type="text" name='description' placeholder="Enter product's description" text="Description:" />
            <div className={styles.cpcontainer}>
              <div className={styles.cpvalue}>
                <ValueInput type="number" name='productprice' placeholder='0.00' text="Price:" />
                <ValueInput type="number" name='productprice' placeholder='0' text="Quantity:" />
              </div>
              <div  className={styles.cpcontainer}>
                <ImageUpload type="file" name='productimage' placeholder='funciona?' text="Product's image" />
                <ImageUpload type="file" name='productbanner' placeholder='funciona?' text="Product's banner Image" />
              </div>
            </div>
            <div className={styles.btns}>
                <button className={styles.backlgbtn2}>
                <Link to='/login'>BACK</Link>
                </button>
                <SubmitBtn2 text={btnText}/>
            </div>
          </form>
    </div>
  )
}

export default CreateProductForm