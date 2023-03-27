import React from "react";

function ProductDetails({product,onClose}) { 
  if (!product) {
    return null;
  }

  return (
    <>
      <div className="modal fade show" style={{display:"block"}} tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
                <h3 className="modal-title">Thông tin sản phẩm</h3>
                <button className="btn-close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <div className="mt-3 row">
                <div className="col-sm-4">
                  <h5 className="text-center">{product.name}</h5>
                  <img
                    src={product.image}
                    alt={product.name}
                    width="100%"
                    height="300px"  
                  />
                </div>
              <div className="col-sm-8">
                <h5>Chi tiết sản phẩm</h5>
                <table className="table">
                  <tbody>
                    <tr>
                      <td style={{fontWeight:"500"}}>Name</td>
                      <td>{product.name}</td>
                    </tr>
                    <tr>
                      <td style={{fontWeight:"500"}}>Alias</td>
                      <td>{product.alias}</td>
                    </tr>
                    <tr>
                      <td style={{fontWeight:"500"}}>Price</td>
                      <td>{product.price}</td>
                    </tr>
                    <tr>
                      <td style={{fontWeight:"500"}}>Description</td>
                      <td>{product.description}</td>
                    </tr>
                    <tr>
                      <td style={{fontWeight:"500"}}>ShortDescription</td>
                      <td>{product.shortDescription}</td>
                    </tr>
                    <tr>
                      <td style={{fontWeight:"500"}}>Quantity</td>
                      <td>{product.quantity}</td>
                    </tr>
                    <tr>
                      <td style={{fontWeight:"500"}}>Image</td>
                      <td>{product.image}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}

export default ProductDetails;

