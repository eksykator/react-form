var contacts = [
    {
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@example.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@gmail.com',
    },
    {
        id: 3,
        firstName: 'Jakub',
        lastName: 'Mróz',
        email: 'jakub.mroz@gmail.com',
    },
    {
        id: 4,
        firstName: 'Marta',
        lastName: 'Tulipan',
        email: 'marta.tulipan@onet.pl',
    }
];

var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

var App = React.createClass({
    render: function() {

        return (
            <div className={'app'}>
                <ContactForm contact={contactForm}/>
                <Contacts items={contacts}/>
            </div>
        );
    }
});



   

      