import React, { useState } from "react";
// import PropTypes from 'prop-types'
import ClassIndex from "../class/index/class_index";
import AddClassButton from "../class/add_class_button";
import ClassFormContainer from "../class/form/class_form_container";

const ClassPage = (props) => {
  const [isCreatingClass, setIsCreatingClass] = useState(false);

  const openClassCreator = () => setIsCreatingClass(true);
  const closeClassCreator = () => setIsCreatingClass(false);

  return (
    <main className="class-page">
      <AddClassButton open={openClassCreator} />
      <ClassIndex />
      {isCreatingClass ? (
        <ClassFormContainer close={closeClassCreator} />
      ) : null}
    </main>
  );
};

// ClassPage.propTypes = {

// }

export default ClassPage;
