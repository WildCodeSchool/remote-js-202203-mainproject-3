import React from 'react';


export function GenerateURL () {

  let url = 'https://quizapi.io/api/v1/questions?apiKey=8P8azHvLpClCBemACzANfCUvptPakrF6D4SNHyX8&limit=11';

  function setURL (event) {
    console.log(event.target.value);
  }

  function handleChangeCategory (target) {
    console.log(target.value);
  }

  function handleChange (value) {
    console.log(value);
  }

  return (
    <div className="containerQuizzGlobal" id="generateURL">
      <form className="reponse" id="formCheck" type='submit' method='get' action='/' onChange={(event) => setURL(event)}>
        <div>
        <div className="form-group">
          <label className="form-label">Difficulty </label>
          <select id='difficulty' className="" name="difficulty" onChange={(event) => handleChange(event.target)}>
            <option value="any">Any Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
          </select>
        </div>
        <br />
          <label className="form-label">Category </label>
          <select id='category' className="" name="category" onChange={(event) => handleChangeCategory(event.target)}>
            <option value="any">Any Category</option>
              <option value="linux">Linux</option>
              <option value="bash">Bash</option>
              <option value="uncategorized">Uncategorized</option>
              <option value="docker">Docker</option>
              <option value="sql">SQL</option>
              <option value="cms">CMS</option>
              <option value="code">Code</option>
              <option value="devops">DevOps</option>
          </select>            
        </div>
        <br />
        <div className="form-group">
          <label className="form-label" htmlFor="nombreEntier">Number of questions </label>
          <input id='questionNumber' type="number" name="nombreEntier" min="1" max="20" step="1"
            defaultValue="10" onChange={(event) => handleChange(event.target)}/>
        </div>
        <p>
          <label className="form-label">Tags</label>
          <br />
          <select id='tagsChoice' name="choixMultiple" size="11" multiple form="idFormulaire" 
            onChange={(event) => handleChange(event.target)}>
            <option value="html">HTML</option>
            <option value="javascript">JavaScript</option>
            <option value="php">PHP</option>
            <option value="laravel">Laravel</option>
            <option value="mysql">MySQL</option>
            <option value="wordpress">WordPress</option>
            <option value="linux">Linux</option>
            <option value="bash">BASH</option>
            <option value="devops">DevOps</option>
            <option value="docker">Docker</option>
            <option value="kubernetes">Kubernetes</option>
          </select>
        </p>
        <div className="">
          <button id="validChoices" className="buttonHome" type="submit">Confirm Choices</button>
        </div>
      </form>
    </div>
  );
}
