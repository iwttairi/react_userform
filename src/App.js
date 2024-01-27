import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = '名前を入力してください';
    }
    if (!formData.email) {
      newErrors.email = 'メールアドレスを入力してください';
    }
    if (!formData.phone) {
      newErrors.phone = '電話番号を入力してください';
    }
    if (Object.keys(newErrors).length === 0) {
      console.log('データを送信しました');
      setFormData({name: '', email:'', phone: ''});
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    setErrors((prevErrors) => ({
      ...prevErrors, [e.target.name]: ''
    }));
  }
  return (
    <div className="container">
      <h1 className='heading'>ユーザフォーム</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className='form-field'>
          <label className='label'>name: </label>
          {errors.name && <span className="error">{errors.name}</span>}
          <input className='input' type="text" name="name" value={formData.name || ''} onChange={handleChange}/>
        </div>
        <div className='form-field'>
          <label className='label'>mail address: </label>
          {errors.email && <span className="error">{errors.email}</span>}
          <input type="email" name="email" value={formData.email} onChange={handleChange} className='input'/>
        </div>
        <div className='form-field'>
          <label className='label'>phone number: </label>
          {errors.phone && <span className="error">{errors.phone}</span>}
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className='input'/>
        </div>
        <button className='button' type='submit'>submit</button>
      </form>
    </div>
  );
}

export default App;
