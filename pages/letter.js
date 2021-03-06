import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Pink from '../components/letter_templates/pink'
import './letter.css'
import { className } from 'postcss-selector-parser';

function Letter(props) {
  const [letterData, setLetterData] = useState('');
  const fetchData = async() => {
    axios({
      method: 'get',
      url: 'letters/' + props.query.pk,
    }).then((response) => {
      const [year, month, day] = response.data.date.split("-")
      setLetterData({
        ...response.data,
        year, month, day
      })
    })
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="letter">
      <Pink {...letterData}/>
    </div>
  )
}

Letter.getInitialProps = ({ query }) => {
  return {query}
}

export default Letter