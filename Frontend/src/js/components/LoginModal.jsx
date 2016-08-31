import React from "react";

var LoginModal = React.createClass({
    getInitialState: function() {
        return {username: '', password: ''};
    },
    handleUsernameChange: function(e) {
        this.setState({username: e.target.value.substr(0, 12)});
    },
    handlePasswordChange: function(e) {
        this.setState({password: e.target.value.substr(0, 12)});
    },
    checkProps: function () {
        let that = this;
        let $form = $('.ui.form');
        const validationRules = {
            fields: {
                username: {
                    identifier: 'username',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter a username'
                        }
                    ]
                },
                password: {
                    identifier: 'password',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter a password'
                        },
                    ]
                },
            },
            onSuccess: function (evt, fields) {
                evt.preventDefault();
                that.props.register('login', fields);
            }
        };
        $form.form(validationRules)
    },
    addError: function (err) {
        console.log(err)
        let $form = $('.ui.error.message');
        $form.append()
    },
    render: function () {
        let $form = $('.ui.form');
        this.checkProps();
        console.log(this.props.error);
        this.props.fetching ? $form.addClass('loading'): $form.removeClass('loading');
        this.props.error ? this.addError(this.props.error): $form.removeClass('error');
        return (
            <div className="ui small modal">
                <div className="header">Login</div>
                <div className="content">
                    <form className="ui form">
                        <div className="field">
                            <input
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleUsernameChange}
                            />
                        </div>
                        <div className="field">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password }
                                onChange={this.handlePasswordChange}
                            />
                        </div>
                        <div className="ui error message"></div>
                        <div className="actions">
                            <div className="ui primary submit button">Submit</div>
                            <div className="ui cancel button">Cancel</div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});
export default LoginModal