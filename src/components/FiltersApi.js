import React from 'react';


export function FiltersApi ({ filtersApi, onChangeFilters }) {

  const tagsByCategory = {
    'any' : ['HTML', 'JavaScript', 'PHP', 'Laravel', 'MySQL', 'WordPress', 'Linux', 'BASH', 'DevOps', 'Docker', 'Kubernetes'],
    'code' : ['HTML', 'JavaScript', 'PHP', 'Laravel'],
    'sql': ['MySQL'],
    'cms' : ['WordPress'],
    'linux': ['Linux', 'BASH', 'Kubernetes'],
    'devops': ['DevOps', 'Kubernetes'],
    'docker': ['Docker', 'Kubernetes'],
  };

  function handleTagsByCategory(category) {
    const tags = tagsByCategory[category];
    const elem = document.getElementById('tagsChoice');
    console.log(tags);
    const len = (elem.length);
    console.log(len);
    for (let i = 1; i <= len; i++) {
      console.log(i);
      elem.remove(i);
    }
    console.log(elem.length);

    tags.forEach(function(element, key) {
        elem[key] = new Option(element, element.toLowerCase(), key);
   });
  }
  
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
      case 'category' : 
        filtersApi['category'] = target.value;
        handleTagsByCategory(target.value);
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
          <label className="form-label">Category </label>
          <select id='category' className="" name="category" 
            onChange={(event) => handleChange(event.target)}>
              <option value="any">Any Category</option>
              <option value="code">Code</option>
              <option value="sql">SQL</option>
              <option value="cms">CMS</option>
              <option value="linux">Linux</option>
              <option value="devops">DevOps</option>
              <option value="docker">Docker</option>
          </select>            
        </div>
        <br />
        <div className="form-group">
          <label className="form-label">Difficulty </label>
          <select id='difficulty' className="" name="difficulty" 
            onChange={(event) => handleChange(event.target)}>
              <option value="any">Any Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
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
          <select id='tagsChoice' name="tags" onChange={(event) => handleChange(event.target)}>
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

// size="11" multiple form="idFormulaire" 
{/*  */}
