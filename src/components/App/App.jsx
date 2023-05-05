import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Modal/Modal";
import { Component } from "react";
import { getPicturesApi } from "components/Api";



export class App extends Component {
  state = {
    pictures: [],
    isLoading: false,
    query: "",
    page: 1,
    error: null,
    isModalOpen: false,
    largeImage: ''
  }

  getSnapshotBeforeUpdate() {
    return document.body.clientHeight
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.query !== this.state.query && this.state.query) {
      this.setState({ isLoading: true, page: 1 })
      try {
        const data = await getPicturesApi(
          this.state.query, 1)
        this.setState({ pictures: data.hits });
      } catch (error) {
        this.setState({ error: error.message })
      } finally {
        this.setState({ isLoading: false })
      }
    }

    if (prevState.page !== this.state.page && this.state.page !==1) {
      this.setState({ isLoading: true });
      try {
        const data = await getPicturesApi(
          this.state.query,
          this.state.page
        );
        this.setState(prev => ({ pictures: [...prev.pictures, ...data.hits] }))
      } catch (error) {
        this.setState({ error: error.message })
      } finally {
        this.setState({ isLoading: false })
      }
    }

    if (prevState.pictures !== this.state.pictures && this.state.page !== 1) {
      window.scrollTo({
        top: snapshot -220,
        behavior: "smooth"
      })
    }

  }

  setQuery = (query) => {
    this.setState({query})
  }

  handleLoadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  openModal = (e) => {
    const currentLargeImage = this.state.pictures.filter(pic => String(pic.id) === String(e.currentTarget.id))
    this.setState({ largeImage: currentLargeImage[0].largeImageURL })
    this.setState({ isModalOpen: true })
  }

  closeModal = () => {
    this.setState({isModalOpen: false})
  }

  render() {
      return (
    <>
          <Searchbar setQuery={this.setQuery} />
          {this.state.pictures.length !== 0
            ? <ImageGallery pictures={this.state.pictures} openModal={this.openModal} />
            : null
          }
          {this.state.isLoading && <Loader />}
          {this.state.pictures.length > 0 && <Button onClick={this.handleLoadMore} />}
          {this.state.isModalOpen && <Modal largeImage={this.state.largeImage} closeModal={this.closeModal} />}
    </>
  );
  }

};
