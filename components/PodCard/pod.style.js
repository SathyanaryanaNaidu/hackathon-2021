import css from 'styled-jsx/css';

const podStyle = css`
  .product-card {
    width: 48%;
    position: relative;
    box-shadow: 0 2px 7px #dfdfdf;
    margin: 3px;
    background: #fafafa;
    border-radius: 8px;
    overflow: hidden;
    @mixin desktop {
      width: 280px;
    }
  }

  .badge {
    position: absolute;
    left: 0;
    top: 20px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    background: red;
    color: #fff;
    padding: 3px 10px;
  }

  .promoted {
    position: absolute;
    width: 30px;
    border-radius: 4px;
    border: 1px solid #fff;
    z-index: 1;
    line-height: 20px;
    background-color: #d7d7d7;
    font-weight: 700;
    color: #fff;
    text-align: center;
    position: absolute;
    top: 15px;
    left: 15px;
    display: block;
  }

  .product-tumb {
    background: #f0f0f0;
    @mixin desktop {
      width: 280px;
      height: 280px;
    }
  }

  .product-catagory {
    display: block;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #717171;
    margin-bottom: 5px;
    @mixin desktop {
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 18px;
    }
  }

  .product-details {
    padding: 15px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
      font-size: 15px;
      line-height: 16px;
      max-height: 32px;
      margin-bottom: 5px;
      @mixin desktop {
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 10px;
        max-height: 38px;
      }

      span {
        font-weight: 500;
        display: block;
        color: #363636;
        text-decoration: none;
        transition: 0.3s;

        &:hover {
          color: #c14044;
        }
      }
    }
  }

  .product-description {
    color: #565656;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 5px;
    max-height: 32px;
    @mixin desktop {
      font-size: 15px;
      line-height: 20px;
      max-height: 40px;
      margin-bottom: 15px;
    }
  }

  .product-bottom-details {
    overflow: hidden;
    padding-top: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    .product-price {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      color: #ca0404;
      font-weight: 700;
      width: 100%;

      small {
        font-size: 80%;
        font-weight: 400;
        text-decoration: line-through;
        display: inline-block;
        margin-right: 5px;
        color: #565656;
      }

      @mixin desktop {
        width: 85%;
      }
    }

    .product-links {
      width: 100%;
      margin-top: 10px;
      @mixin desktop {
        margin-top: 0;
      }
    }

    @mixin desktop {
      border-top: 1px solid #eee;
      padding-top: 20px;
      flex-direction: row;
    }
  }
`;

export default podStyle;
