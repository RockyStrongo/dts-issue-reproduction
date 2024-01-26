import React from 'react';

import {Select} from '../../src/index';

export default {
  title: 'Components/Select',
  component: Select,
};

export const Base = {
  args: {
    label: "Langage",
    id: "lang",
    data: [
      { value: "sql", label: "SQL" },
      { value: "java", label: "Java" },
      { value: "vue", label: "vue-JS" },
    
    ],
  },
};

