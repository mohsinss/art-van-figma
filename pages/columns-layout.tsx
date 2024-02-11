import type { NextPage } from "next";
import styles from "./columns-layout.module.css";

const ColumnsLayout: NextPage = () => {
  return (
    <div className={styles.columnsLayout}>
      <div className={styles.columnFrame}>
        <div className={styles.childFrame}>
          <div className={styles.innerFrame} />
        </div>
      </div>
      <div className={styles.columnFrame1}>
        <div className={styles.columnFrameInner}>
          <div className={styles.frameChild} />
        </div>
      </div>
      <div className={styles.columnFrame2}>
        <div className={styles.columnFrameChild}>
          <div className={styles.frameItem} />
        </div>
      </div>
      <div className={styles.columnFrame3}>
        <div className={styles.frameDiv}>
          <div className={styles.frameInner} />
        </div>
      </div>
      <div className={styles.columnFrame4}>
        <div className={styles.columnFrameInner1}>
          <div className={styles.rectangleDiv} />
        </div>
      </div>
      <div className={styles.columnFrame5}>
        <div className={styles.columnFrameInner2}>
          <div className={styles.frameChild1} />
        </div>
      </div>
      <div className={styles.columnFrame6}>
        <div className={styles.columnFrameInner3}>
          <div className={styles.frameChild2} />
        </div>
      </div>
      <div className={styles.columnFrame7}>
        <div className={styles.columnFrameInner4}>
          <div className={styles.frameChild3} />
        </div>
      </div>
      <div className={styles.columnFrame8}>
        <div className={styles.columnFrameInner5}>
          <div className={styles.frameChild4} />
        </div>
      </div>
      <div className={styles.columnFrame9}>
        <div className={styles.columnFrameInner6}>
          <div className={styles.frameChild5} />
        </div>
      </div>
      <div className={styles.columnFrame10}>
        <div className={styles.columnFrameInner7}>
          <div className={styles.frameChild6} />
        </div>
      </div>
      <div className={styles.columnFrame11}>
        <div className={styles.columnFrameInner8}>
          <div className={styles.frameChild7} />
        </div>
      </div>
    </div>
  );
};

export default ColumnsLayout;
