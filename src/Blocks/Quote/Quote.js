import Button from '../../Components/Button/Button'
import React from 'react';
import './Quote.css'
const formItems = [
    {
        id: 'name',
        label: 'Your Name',
        error: 'Name is required',
        pattern: "[A-Za-z ]{3,}",
        type:"text"

    }, {

        id: 'contact',
        label: 'Contact No',
        error: 'Contact No is required',
        type:"text"
    }, {
        id: 'email',
        label: 'Email',
        error: 'Email is required',
        type:"email"
    }
]
class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccess: false

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            isSuccess: true
        })
        document.getElementById('name').value = ''
        document.getElementById('contact').value = ''
        document.getElementById('email').value = ''
        setTimeout(() => {
            this.setState({
                isSuccess: false
            })
        }, 5000);
    }

    handleChange = (e) => {

        if (e.target.id === "name") {
            e.target.value.length > 0 ?
                document.querySelector(`#${e.target.id}+p`).style.display = "none"
                :
                document.querySelector(`#${e.target.id}+p`).style.display = "block"

        }
        if (e.target.id === "contact") {
            if (e.target.value.length > 0) {
                const regex = /\d{10}/
                regex.test(e.target.value) ? document.querySelector(`#${e.target.id}+p`).style.display = "none"
                    :
                    document.querySelector(`#${e.target.id}+p`).style.display = "block"
                document.querySelector(`#${e.target.id}+p`).textContent = "Invalid Contact No"
            } else {
                document.querySelector(`#${e.target.id}+p`).style.display = "block"
                document.querySelector(`#${e.target.id}+p`).textContent = "Contact No is required"
            }
        }
        if (e.target.id === "email") {
            if (e.target.value.length > 0) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                re.test(String(e.target.value).toLowerCase()) ? document.querySelector(`#${e.target.id}+p`).style.display = "none"
                    :
                    document.querySelector(`#${e.target.id}+p`).style.display = "block"
                document.querySelector(`#${e.target.id}+p`).textContent = "Invalid Email."
            }
            else {
                document.querySelector(`#${e.target.id}+p`).style.display = "block"
                document.querySelector(`#${e.target.id}+p`).textContent = "Email is required"
            }
        }
    }

    render() {
        return (
            <div className="quote-container" id="quote">
                <h2>Travelling as a group? Get a Quote</h2>
                <form onSubmit={this.handleSubmit}>
                    {formItems.map((i, j) =>
                        (<div key={j} className="quote-form__group">
                                <label className="quote-form__label" htmlFor="name">
                                    {i.label}
                                </label>
                                <input
                                    onBlur={this.handleChange}
                                    onChange={this.handleChange}
                                    className="quote-form__input"
                                    id={i.id}
                                    required="required"
                                    type={i.type}
                                    pattern={i.pattern ? i.pattern : null}
                                />
                                <p className="quote-form__error">{i.error}</p>
                            </div>)
                        )
                    }
                    <div className="quote-form__success">
                        {this.state.isSuccess ? ' We hear you ! We will get back to you for planning your vacation' : null}
                    </div>
                    <Button type="button" theme="button-primary" label="Submit" />
                </form>
            </div>
        );
    }
}

export default Quote