"use client";
import HelloWorld from "./HelloWorld";
import SimpleInput from "./SimpleInput";
import styles from './page.module.css'
import React, { useState } from 'react';
export default function HomePage() {
  const [showFields, setShowFields] = useState(true);
  return (
    <>
      <main className={styles.bodyText}>
        <HelloWorld />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          convallis ante ut magna condimentum, eget ornare ligula mattis.
          Maecenas congue, sapien porta fermentum venenatis, lectus justo cursus
          nisl, et accumsan dolor lacus ut dolor. Vivamus vulputate arcu a nulla
          finibus rhoncus. Curabitur viverra est viverra risus interdum, ut
          pellentesque lectus molestie. Ut consequat mauris a risus consequat,
          vel semper turpis faucibus. Duis venenatis dolor in metus aliquam,
          quis volutpat tortor aliquet. Cras volutpat velit nisl, vitae
          sollicitudin nibh aliquam id. Sed blandit convallis massa, a blandit
          quam fringilla eget. Mauris pretium enim quis pulvinar volutpat. Cras
          arcu nisi, feugiat at elementum vitae, mattis sit amet quam. Nulla
          interdum in lacus vitae consectetur. In lacinia ex quis mauris
          vehicula lobortis.
        </p>
      </main>
      <footer>
        {showFields ? <SimpleInput /> : null}
        <button onClick={() => { setShowFields(false) }}>Remove</button>
      </footer>
    </>
  );
}
