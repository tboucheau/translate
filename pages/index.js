import React, { useState } from 'react';
import axios from 'axios';

const IndexPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [targetLanguage, setTargetLanguage] = useState('fr'); // Défaut : français

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setTargetLanguage(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://nnbgvwnxn1.execute-api.eu-central-1.amazonaws.com/translate', { data: inputValue, target: targetLanguage });
      setResponseData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5">Ecrivez ce que vous voulez</h1>
      <p>L'IA vous traduira dans la langue choisie (valider avec la touche ↩️)</p>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Saisissez vos données" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} />
      </div>
      <div className="input-group mb-3">
        <select className="form-select" onChange={handleLanguageChange} value={targetLanguage}>
          <option value="af">Afrikaans</option>
          <option value="sq">Albanian</option>
          <option value="am">Amharic</option>
          <option value="ar">Arabic</option>
          <option value="hy">Armenian</option>
          <option value="az">Azerbaijani</option>
          <option value="bn">Bengali</option>
          <option value="bs">Bosnian</option>
          <option value="bg">Bulgarian</option>
          <option value="ca">Catalan</option>
          <option value="zh">Chinese (Simplified)</option>
          <option value="zh-TW">Chinese (Traditional)</option>
          <option value="hr">Croatian</option>
          <option value="cs">Czech</option>
          <option value="da">Danish</option>
          <option value="fa-AF">Dari</option>
          <option value="nl">Dutch</option>
          <option value="en">English</option>
          <option value="et">Estonian</option>
          <option value="fa">Farsi (Persian)</option>
          <option value="tl">Filipino, Tagalog</option>
          <option value="fi">Finnish</option>
          <option value="fr">French</option>
          <option value="fr-CA">French (Canada)</option>
          <option value="ka">Georgian</option>
          <option value="de">German</option>
          <option value="el">Greek</option>
          <option value="gu">Gujarati</option>
          <option value="ht">Haitian Creole</option>
          <option value="ha">Hausa</option>
          <option value="he">Hebrew</option>
          <option value="hi">Hindi</option>
          <option value="hu">Hungarian</option>
          <option value="is">Icelandic</option>
          <option value="id">Indonesian</option>
          <option value="ga">Irish</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="kn">Kannada</option>
          <option value="kk">Kazakh</option>
          <option value="ko">Korean</option>
          <option value="lv">Latvian</option>
          <option value="lt">Lithuanian</option>
          <option value="mk">Macedonian</option>
          <option value="ms">Malay</option>
          <option value="ml">Malayalam</option>
          <option value="mt">Maltese</option>
          <option value="mr">Marathi</option>
          <option value="mn">Mongolian</option>
          <option value="no">Norwegian (Bokmål)</option>
          <option value="ps">Pashto</option>
          <option value="pl">Polish</option>
          <option value="pt">Portuguese (Brazil)</option>
          <option value="pt-PT">Portuguese (Portugal)</option>
          <option value="pa">Punjabi</option>
          <option value="ro">Romanian</option>
          <option value="ru">Russian</option>
          <option value="sr">Serbian</option>
          <option value="si">Sinhala</option>
          <option value="sk">Slovak</option>
          <option value="sl">Slovenian</option>
          <option value="so">Somali</option>
          <option value="es">Spanish</option>
          <option value="es-MX">Spanish (Mexico)</option>
          <option value="sw">Swahili</option>
          <option value="sv">Swedish</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="th">Thai</option>
          <option value="tr">Turkish</option>
          <option value="uk">Ukrainian</option>
          <option value="ur">Urdu</option>
          <option value="uz">Uzbek</option>
          <option value="vi">Vietnamese</option>
          <option value="cy">Welsh</option>
        </select>
      </div>
            {responseData && (
        <div className="alert alert-info" role="alert">
          Voici la traduction {JSON.stringify(responseData, null, 2)}
        </div>
      )}
      {error && <div className="alert alert-danger" role="alert">Error: {error.message}</div>}
    </div>
  );
};

export default IndexPage;
