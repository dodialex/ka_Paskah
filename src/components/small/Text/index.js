import React from 'react'

const Tulisan = ({ teks }) => {
    return (
        <div>
            <h4 style={teksnya}>{teks}</h4>
            <hr style={hr} />
        </div>
    )
}

export default Tulisan;
const teksnya = {
    color: '#3a668b',
    textAlign: 'center'
}
const hr = {
    color: '#c8c8c8',
    height: '2px',
    width: '50%',
    border: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '56px',
    marginBottom: '56px',
}


