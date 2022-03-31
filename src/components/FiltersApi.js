import React from 'react';


export function FiltersApi ({ filtersApi, onChangeFilters }) {

  // const [difficulty, setDifficulty] = React.useState('any');
  // const [category, setCategory] = React.useState('any');
  // const [numberOfQuestion, setNumberOfQuestion] = React.useState(10);
  // const [tagsChoice, setTagsChoice] = React.useState('');

  function handleFiltersApi (filtersApi) {
    onChangeFilters(filtersApi);
  }

  function getSelectedTags (options) {
    let tags = '';
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        (tags.length > 0) ? tags = tags + ',' : null;
        tags = tags + options[i].value;
      }
    }
    return tags;
  }

  function handleChange (target) {
    switch (target.id) {
      case 'difficulty' : filtersApi['difficulty'] = target.value;
        break;
      case 'category' : filtersApi['category'] = target.value;
        break;
      case 'numberOfQuestion' : filtersApi['limit'] = parseInt(target.value);
        break;
      case 'tagsChoice' : filtersApi['tags'] = getSelectedTags(target.options);
        break;
    }
  }

  return (
    <div className="containerQuizzGlobal" id="filtersApi">
      <form className="reponse" id="formCheck" type='submit' method='get' action='/' onChange={() => handleFiltersApi(filtersApi)}> {/* onChange={(event) => setURL(event)} */}
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
          <select id='category' className="" name="category" onChange={(event) => handleChange(event.target)}>
            <option value="any">Any Category</option>
              <option value="code">Code</option>
              <option value="sql">SQL</option>
              <option value="linux">Linux</option>
              <option value="bash">Bash</option>
              <option value="devops">DevOps</option>
              <option value="docker">Docker</option>
              <option value="uncategorized">Uncategorized</option>
          </select>            
        </div>
        <br />
        <div className="form-group">
          <label className="form-label" htmlFor="nombreEntier">Number of questions </label>
          <input id='numberOfQuestion' type="number" name="limit" min="1" max="20" step="1"
            defaultValue="10" onChange={(event) => handleChange(event.target)}/>
        </div>
        <p>
          <label className="form-label">Tags</label>
          <br />
          <select id='tagsChoice' name="tags" size="11" multiple form="idFormulaire" 
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
      </form>
    </div>
  );
}
