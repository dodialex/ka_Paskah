import React from 'react'
import { Header, Peta } from '../../components/contact';
import { Footer } from '../../components/big';
import { Tulisan } from '../../components/small';

const Contact = () => {
    return (
        <div>
            <Header />
            <p style={br} />
            <Tulisan
                teks='Get In Touch'
                teks5='For U.S based enquiries please contact Society'
            />
            <p style={teksnya2}>UK & Rest of the World please call us on <b> +44 (0) 20 7729 3612</b> or fill in the form below:</p>
            <Tulisan />
            <Peta />
            <p style={br} />
            <Footer />
        </div>
    )
}

export default Contact;
const br = {
    marginBottom: '100px'
}
const teksnya2 = {
    textAlign: 'center',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#7f7f7f',
    fontSize: '20px'
}
