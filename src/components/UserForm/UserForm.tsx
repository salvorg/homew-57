import React, {useState} from 'react';
import {User, UserMutation} from "../../types";

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    role: 'user',
    active: false,
  });

  const onUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  };

  const onUserChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  };

  const onCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  }

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...user,
    })
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new user</h4>
      <label htmlFor="name">Name</label>
      <div className="form-group">
        <input
          id="name"
          name="name"
          type="text"
          className="form-control"
          value={user.name}
          onChange={onUserChange}
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-control"
          value={user.email}
          onChange={onUserChange}
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          className="form-select"
          value={user.role}
          onChange={onUserChangeSelect}
        >
          <option value="user">user</option>
          <option value="editor">editor</option>
          <option value="admin">admin</option>
        </select>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="active" className="form-check-label">Active</label>
        <input
          id="active"
          name="active"
          type="checkbox"
          className="form-check-input ms-3"
          onChange={onCheckChange}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-4">Add</button>
    </form>
  );
};

export default UserForm;