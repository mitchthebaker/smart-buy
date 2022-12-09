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
    <main>
      { children }
    </main>
  );
};

export default StandardLayout;