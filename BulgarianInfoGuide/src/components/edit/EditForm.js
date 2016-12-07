import React, {Component} from 'react';

export default class EditForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <label>Име:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={this.props.name}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Описание:</label>
                    <textarea
                        rows="7"
                        className="form-control"
                        name="description"
                        value={this.props.description}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Url към снимка:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="image"
                        value={this.props.image}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input className="btn btn-default" type="submit" value="Промени" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}