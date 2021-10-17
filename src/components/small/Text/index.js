import React from 'react'

const Tulisan = ({ teks, teks2, teks3, teks4, teks5, teks6, teks7, teks8, teks9, teks10, teks11, teks12, teks13 }) => {
    return (
        <div>
            <h4 style={teksnya}>{teks}</h4>
            <p style={teksnya2}>{teks2}</p>
            <p style={teksnya4}>{teks7}</p>
            <p style={teksnya4}>{teks8}</p>
            <p style={teksnya2}>{teks3}</p>
            <hr style={hr} />
            <h4 style={teksnya9}>{teks9}</h4>
            <p style={teksnya4}>{teks4}</p>
            <p style={teksnya4}>{teks10}</p>
            <p style={teksnya4}>{teks11}</p>
            <p style={teksnya4}>{teks12}</p>
            <p style={teksnya4}>{teks13}</p>


            <p style={teksnya2}>{teks5}</p>
            <p style={teksnya2}>{teks6}</p>
        </div>
    )
}

export default Tulisan;
const teksnya = {
    color: '#3a668b',
    textAlign: 'center',
    marginBottom: '60px'
}
const teksnya2 = {
    textAlign: 'center',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#7f7f7f',
    fontSize: '20px'
}
const hr = {
    color: '#c8c8c8',
    height: '2px',
    width: '60%',
    border: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    marginBottom: '50px',
}
const teksnya4 = {
    textAlign: 'justify',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#7f7f7f',
    marginBottom: '50px',
    width: '60%',
    fontSize: '20px'

}
const teksnya9 = {
    color: '#7f7f7f',
    textAlign: 'center',
    marginBottom: '60px',
    textDecoration: 'underline',

}


