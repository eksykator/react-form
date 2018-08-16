var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    
    render: function() {
        return (
            <form className={'contactForm'}>
                <input type={'text'} placeholder={'Imię'} />
                <input type={'text'} placeholder={'Nazwisko'} />
                <input type={'text'} placeholder={'Email'} />
                <button type={'submit'}>
                    Dodaj kontakt
                </button>
            </form>
        )
    },
})