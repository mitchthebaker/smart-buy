// sass 
import '../../sass/layout/_standardlayout.scss';

const StandardLayout = ({ children }) => {
  
  /**
   * Should end up being something like this:
   * 
   * <main>
   *   <Nav />
   *   { children }
   *   <Footer />
   * </main>
   * 
   */
  return (
    <main className='standardlayout'>
      { children }
    </main>
  );
};

export default StandardLayout;